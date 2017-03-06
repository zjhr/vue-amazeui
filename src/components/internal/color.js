export default {
    props: {
        amStyle: {
            type: String,
            default: ''
        }, //【blue，sblue，green，orange，red，black】
        blue: Boolean, //蓝色
        sblue: Boolean, //浅蓝色
        green: Boolean, //绿色
        orange: Boolean, //橙色
        red: Boolean, //红色
        black: Boolean //黑色
    },
    data() {
        return {
            pblue: false,
            psblue: false,
            pgreen: false,
            porange: false,
            pred: false,
            pblack: false,
            pamStyle: ''
        }
    },
    methods: {
        colorStyleChange(val, oldval) {
            this[`p${val}`] = true
            this[`p${oldval}`] = false
        }
    },
    watch: {
        amStyle(val, oldval) {
            this.colorStyleChange(val, oldval)
        },
        pamStyle() {
            this.colorStyleChange(val, oldval)
        }
    },
    computed: {
        objectClass() {
            let el = this.name;
            this[`p${this.pamStyle || this.amStyle}`] = true
            return {
                [el + '-primary']: this.blue || this.pblue,
                [el + '-secondary']: this.sblue || this.psblue,
                [el + '-success']: this.green || this.pgreen,
                [el + '-warning']: this.orange || this.porange,
                [el + '-alert']: this.red || this.pred,
                [el + '-dark']: this.black || this.pblack
            }
        }
    }

}