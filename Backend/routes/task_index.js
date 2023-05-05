module.exports = app => {

    const express = require('express');
    const router = express.Router();
    const Task = require('../models/Task');
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const JWTKEY = require('../plugin/config/jwtkey');
    const passport = require('passport');
    const dayjs = require('dayjs');

    //Middleware For Router
    app.use('/api/task', router);

    //- CreateTask_API-Public_API
    router.post('/create',passport.authenticate('jwt', {session: false}), async (req, res) => {
        try {
            const { id } = req.user;
            const dueDate = new Date(req.body.date);
            const newTask = new Task({ ...req.body, userId: id, date: dueDate });
            const saveTask = await newTask.save();
            return res.status(201).json({ newTask: saveTask });
        } catch (err) {
            console.log(err);
            return res.status(500).json('Server Problem');
        }
    })

    //- List_All_Task_API-Public_API
    router.get('/taskList', passport.authenticate('jwt', {session: false}), async(req, res) => {
        try {
            const { type, day } = req.query ?? {};
            const { id } = req.user;
            const today = dayjs().format('YYYY-MM-DD');
            let min, max;

            switch(day) {
            case 'today':
                min = today;
                max = today;
                break;
            case 'seven':
                min = dayjs().subtract(7, 'day').format('YYYY-MM-DD');
                max = today;
                break;
            case 'thirty':
                min = dayjs().subtract(30, 'day').format('YYYY-MM-DD');
                max = today;
                break;
            default:
                break;
            }

            const query = {
            userId: id,
            ...(type && { type }),
            ...(day && { date: { $lte: new Date(max), $gte: new Date(min) } })
            };
            const tasks = await Task.find(query);

            res.status(200).json({tasks});
        } catch (err) {
            console.log(err);
            res.status(500).json('Server Problem');
        }
    })

    //- UpdateTask_API-Public_API
    router.put('/:id', passport.authenticate('jwt', {session: false}), async(req, res) => {
        try {
        const task = await Task.findByIdAndUpdate( req.params.id , {...req.body}, {new: true})
        res.status(200).json({task})
        } catch (err) {
        console.log(err);
        res.status(500).json('Server Problem');
        }
    })

    //- DeleteTask_API-Public_API
    router.delete('/:id', passport.authenticate('jwt', {session: false}), async(req, res) => {
        try {
        const task = await Task.findByIdAndDelete( req.params.id , {...req.body}, {new: true})
        res.status(200).json({success: true})
        } catch (err) {
        console.log(err);
        res.status(500).json('Server Problem');
        }
    })

    //- Access-Right- Task
    router.get('/allTasks', passport.authenticate('jwt', {session: false}), async (req, res) =>{
        try {
        console.log("Tell Mew:", req.user.identity)
        if(req.user.identity === "Admin"){
            const data = await Task.find().populate('userId')
            console.log(data)
            res.send(data);
        }else{
            return res.status(401).json("You don't have exces");
        }
        } catch (error) {
        }
  })
    //- Access-Right- Delete Task
    router.delete('/:id', passport.authenticate('jwt', {session: false}), async(req, res) => {
        try {
            console.log("Tell Mew:", req.user.identity)
            if(req.user.identity === "Admin"){
                const data = await Task.findByIdAndDelete( req.params.id , {...req.body}, {new: true})
                console.log(data)
                res.status(200).json({success: true})
            }else{
                return res.status(401).json("You don't have exces");
            }
            } catch (error) {
        }
    })

    //- Access-Right - Update Task
    router.put('/:id', passport.authenticate('jwt', {session: false}), async(req, res) => {
        try {
            console.log("Tell Mew:", req.user.identity)
            if(req.user.identity === "Admin"){
                const task = await Task.findByIdAndUpdate( req.params.id , {...req.body}, {new: true})
                console.log(task);
                res.status(200).json({task})
            }else{
                return res.status(401).json("You don't have exces");
            }
        } catch (err) {
        console.log(err);
        res.status(500).json('Server Problem');
        }
    })

}