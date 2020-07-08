export default {
  name: 'input-filed',
  props: {
    strong: Boolean,
    name: String,
    autofocus: Boolean,
    title: String,
    type: {
      type: String,
      default: 'text'
    },
    value: String | Number,
    icon: {
      type: String,
      default: '',
      validator: value => ['', 'user', 'key'].includes(value)
    },
    placeholder: {
      type: String,
      default: ''
    },
    errorText: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconClass() {
      const icon = this.icon;

      return icon.length ? `input--iconed input__icon--${ icon }` : '';
    }
  },
  components: {
    vcTooltipInput: () => import('../tooltip-input/tooltip-input.vue')
  }
};