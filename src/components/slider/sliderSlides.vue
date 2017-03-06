<template>
    <ul class="slider-slides" @touchstart.stop="touchstartFun($event)" @touchmove.stop="touchmoveFun($event)" @touchend.stop="touchendFun($event)">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: 'slider-slides',
        data() {
            return {
                startX: 0, startY: 0, endX: 0, endY: 0
            }
        },
        methods: {
            touchstartFun(event) {
                const touch = event.touches[0];
                this.startX = touch.pageX
                this.startY = touch.pageY;
                this.$emit('silderStart')
            },
            touchmoveFun(event) {
                let touch = event.touches[0];
                this.endX = (touch.pageX - this.startX);
                this.endY = (this.startY - touch.pageY);
            },
            touchendFun(event) {
                if (this.endX > 100) {//右
                    this.$emit('silderRight')
                } else if (this.endX < -100) {//左
                    this.$emit('silderLeft')
                }
            }
        }
    }

</script>

<style scoped>

</style>