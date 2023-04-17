/**-- task_index.js file_Task Swagger Schema
 *
 *-- Purpose: To-Do List API
 *
 * @swagger
 * components:
 *  schemas:
 *      Task:
 *          type: object
 *          require:
 *              - userId
 *              - taskName
 *              - status
 *              - date
 *          properties:
 *              id:
 *                  type: string
 *                  description: Auto-generated _id from MongoDB --> For Task
 *              userId:
 *                  type: string
 *                  description: User ID
 *              taskName:
 *                  type: string
 *                  description: Task Content
 *              status:
 *                  type: string
 *                  enums: ['pending' , 'completed']
 *                  default: 'pending'
 *                  description: Task Status
 *              date:
 *                  type: string
 *                  description: Task Creation Time
 *          example:
 *              userId: 640a6b5b04391ed7d7d8e009
 *              taskName: Proposal
 *              status: Pending
 *              date: Sun Apr 30 2023 00:00:00 GMT-0400 (Eastern Daylight Time)
 */

 /**-- The To-Do List Section
 * @swagger
 * tags:
 *  name: To-Do List
 *  description: To-Do List API for Task Setting
 */

 /**-- CreateTask Swagger
* @swagger
  * /api/task/create:
  *     post:
  *         summary: Create a New Task
  *         tags: [Task]
  *         security:
  *             -   bearerAuth: []
  *         requestBody:
  *             required: true
  *             content:
  *                 application/json:
  *                     schema:
  *                         $ref: '#/components/schemas/Task'
  *         responses:
  *             200:
  *                 description: Task Created Successfully
  *                 content:
  *                     application/json:
  *                         schema:
  *                             $ref: '#/components/schemas/Task'
  *             500:
  *                 description: Server Error
  *
  */

 /**-- List_ALl_TasksAPI Swagger
 * @swagger
 *  /api/task/taskList:
 *      get:
 *          summary: List All Tasks
 *          tags: [Task]
 *          security:
 *            - bearerAuth: []
 *          responses:
 *              200:
 *                  description: Task List
 *                  content:
 *                      application/json:
 *                          type: array
 *                          item:
 *                              $ref: '#/components/schemas/Task'
 */

 /**-- Update_TaskAPI Swagger
  * @swagger
  *   /api/task/{id}:
  *     put:
  *       summary: Update the Task by Id
  *       tags: [Task]
  *       security:
  *         - bearerAuth: []
  *       parameters:
  *         - in: path
  *           name: id
  *           schema:
  *             type: string
  *           required: true
  *           description: update task by id
  *       requestBody:
  *           required: true
  *           content:
  *             application/json:
  *               schema:
  *                 $ref: '#/components/schemas/Task'
  *       responses:
  *         200:
  *           description: The Task is Updated
  *           content:
  *             application/json:
  *               schema:
  *                 $ref: '#/components/schemas/Task'
  *         404:
  *           description: The task is not found
  *         500:
  *           description: Server Error
  *
  */


  /**-- Delete_TaskAPI Swagger
 * @swagger
 * /api/task/{id}:
 *  delete:
 *      summary: Remove the task by id
 *      tags: [Task]
 *      security:
 *          -   bearerAuth: []
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: string
 *              required: true
 *              description: delete task by id
 *      responses:
 *          200:
 *              description: The Task is Deleted
 *          404:
 *              description: The task is not found
 *          500:
 *              description: Server Error
 *
 */