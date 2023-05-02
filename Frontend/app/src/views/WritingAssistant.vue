<template>
    <div class="outer-container min-vh-90 d-flex align-items-center" >
        <!-- Left-Container -->
        <div class="container">
            <div class="row justify-content-center">
                <div class="col">
                    <div class="card w-100">
                        <div class="card-body">
                            <h1 class="h4 text-center">Content Creator</h1>
                            <hr>
                            <!-- input -->
                            <div>
                                <br>
                                <form>
                                    <div class="form-floating mt-3">
                                        <input type="text" class="form-control" id="chatInput" placeholder="Write Something">
                                    </div>
                                </form>
                            </div>
                            <div id="chat" class="overflow-y-auto" style="height: 500px; overflow-y:auto;">

                            </div>
                            <hr>
                            <button type="button" class="btn" style="background-color: #D9D9D9; border: none; color: black;">Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Right-Container -->
        <div class="container">
            <div class="row justify-content-center">
                <div class="col">
                    <div class="card w-100">
                        <div class="card-body">
                            <h1 class="h4 text-center">Novist AI Assistant</h1>
                            <hr>
                            <!-- Chat -->
                            <div id="chat" class="overflow-y-auto" style="height: 500px; overflow-y:auto;">
                                <!-- GPT -->
                                <div class="d-flex align-items-start mb-4">
                                    <img src="../../src/assets/img/novist-logo.png" width="60" alt="">
                                    <p class="bg-body-secondary p-3 m-0 rounded flex-fill" style="background-color: #D9D9D9;">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, perferendis iure. Eos ipsa, iusto dicta magni neque iure aspernatur veniam placeat quam, non porro cupiditate earum nam eligendi dolores explicabo?
                                    </p>
                                </div>
                                <!-- Message Template -->
                                <!-- User -->
                                <div class="d-flex align-items-start mb-4">
                                    <img src="../../src/assets/img/user-logo.png" width="60" alt="" >
                                    <p class="bg-body-secondary p-3 m-0 rounded flex-fill" style="background-color: #f1f1f1;">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, perferendis iure. Eos ipsa, iusto dicta magni neque iure aspernatur veniam placeat quam, non porro cupiditate earum nam eligendi dolores explicabo?
                                    </p>
                                </div>

                                <div class="d-flex align-items-start mb-4">
                                    <img src="../../src/assets/img/user-logo.png" width="60" alt="">
                                    <p class="bg-body-secondary p-3 m-0 rounded flex-fill" style="background-color: #f1f1f1;">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, perferendis iure. Eos ipsa, iusto dicta magni neque iure aspernatur veniam placeat quam, non porro cupiditate earum nam eligendi dolores explicabo?
                                    </p>
                                </div>
                                <!-- GPT -->
                                <div class="d-flex align-items-start mb-4">
                                    <img src="../../src/assets/img/novist-logo.png" width="60" alt="">
                                    <p class="bg-body-secondary p-3 m-0 rounded flex-fill" style="background-color: #D9D9D9;">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate dicta sapiente consectetur assumenda veritatis alias perferendis, quas rerum? Vel magnam odit nihil soluta nulla reiciendis corrupti omnis facere molestiae voluptatibus? Illum similique possimus inventore? Maiores sequi totam itaque voluptatibus nulla quas et vel a numquam commodi in tempore, ab facilis voluptate? Dolorem voluptatibus quae expedita harum excepturi asperiores, atque neque dignissimos quod quidem tenetur voluptate ratione maxime debitis nemo eum dolor totam, officia commodi architecto et. Non sint libero optio.
                                    </p>
                                </div>
                                <div class="d-flex align-items-start mb-4">
                                    <img src="../../src/assets/img/novist-logo.png" width="60" alt="">
                                    <p class="bg-body-secondary p-3 m-0 rounded flex-fill" style="background-color: #D9D9D9;">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, nam?
                                    </p>
                                </div>
                            </div>
                            <!-- input -->
                            <div>
                                <hr>
                                <form>
                                    <div class="form-floating mt-3">
                                        <input type="text" class="form-control" id="chatInput" placeholder="Asking Something">
                                    </div>
                                </form>
                            </div>
                            <hr>
                            <button type="button" class="btn" style="background-color: #D9D9D9; border: none; color: black;">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:'writingassistant',
}
</script>

<style scoped>

@media (max-width: 570px){
    .outer-container {
            display: flex;
            flex-direction: column;
    }
}
</style>