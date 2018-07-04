<template>
    <div>
        <div class="navigator">
            <input
                id="navigator-input"
                class="navigator-input"
                type="range"
                min="1"
                max="20"
                value="10"
            >
        </div>
        <div class="body">

        </div>
        <div class="map">

        </div>
    </div>
</template>

<script>
    export default {
        name: "roadMap"
    }
</script>

<style lang="scss" scoped>

    .navigator {
        width: 100%;
        &-input {
            width: 100%;
            height: 10px;
            background: #E6E6E6;
            outline: none;
            appearance: none;
            border-radius: 5px;

        }
    }

</style>
