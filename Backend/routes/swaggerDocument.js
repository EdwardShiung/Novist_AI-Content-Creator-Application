/**-- Index.js file_User Swagger Schema
 *
 *-- Purpose: Register & Login API
 *
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          require:
 *              - name
 *              - email
 *              - password
 *              - identity
 *              - date
 *          properties:
 *              id:
 *                  type: string
 *                  description: Auto-generated _id from MongoDB
 *              name:
 *                  type: string
 *                  description: User Name
 *              email:
 *                  type: string
 *                  description: User Email
 *              password:
 *                  type: string
 *                  description: User Password (JWT Salted)
 *              identity:
 *                  type: string
 *                  description: Admin or Not Admin
 *              date:
 *                  type: string
 *                  description: User Account Creation Time
 *          example:
 *              id: 8753makjlklklkhlkh
 *              name: Chris Brown
 *              email: dcbrown@vt.edu
 *              password: 687yh8uhihbuih3eiudn23hkj98jnon
 *              identity: Admin
 *              date: 2023/04/30
 */

/**-- The Register & Login Section
 * @swagger
 * tags:
 *  name: User
 *  description: User API for Register & Login
 */

 /**-- RegisterAPI Swagger
  * @swagger
  * /api/user/register:
  *     post:
  *         summary: Add a New User
  *         tags: [User]
  *         requestBody:
  *             required: true
  *             content:
  *                 application/json:
  *                     schema:
  *                         $ref: '#/components/schemas/User'
  *         responses:
  *             200:
  *                 description: User Created Successfully
  *                 content:
  *                     application/json:
  *                         schema:
  *                             $ref: '#/components/schemas/User'
  *             500:
  *                 description: Server Error
  *
  */

  /**-- List_ALl_UserAPI Swagger
 * @swagger
 *  /api/user/users:
 *      get:
 *          summary: List All Users
 *          tags: [User]
 *          responses:
 *              200:
 *                  description: User List
 *                  content:
 *                      application/json:
 *                          type: array
 *                          item:
 *                              $ref: '#/components/schemas/User'
 */

   /**-- LoginAPI Swagger
  * @swagger
  * /api/user/login:
  *     post:
  *         summary: User Login
  *         tags: [User]
  *         requestBody:
  *             required: true
  *             content:
  *                 application/json:
  *                     schema:
  *                         $ref: '#/components/schemas/User'
  *         responses:
  *             200:
  *                 description: User Created Successfully
  *                 content:
  *                     application/json:
  *                         schema:
  *                             $ref: '#/components/schemas/User'
  *             400:
  *                 description: Wrong Password
  *             500:
  *                 description: Server Error
  *
  */