export default {
    mounted() {
        this.updateIndex()
    },
    methods: {
        updateIndex() {
            let children = this.$children
            if (!children.length) return
            for (let i = 0; i < children.length; i++) {
                children[i].currentIndex = i
                if (children[i].active) {
                    this.itemsIndex = i
                    this.newopenitemnum = i
                }
            }
        }
    }
}