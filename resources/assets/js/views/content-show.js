module.exports = {
  template: require('./content-show.template.html'),

  replace: true,

  props: ['params'],

  data: function () {
    return {
      params: {
        contentId: null,
        currentView: null,
        filename: null,
        files: null
      },
      contents: '',
    }
  },

  components: {
    navbar: require('../components/navbar'),
    manager: require('../components/file-manager'),
    editor: require('../components/editor')
  },

  watch: {
    'params.contentId': 'fetchData'
  },

  compiled: function () {
    this.fetchData()
  },

  methods: {
    fetchData: function() {
      this.$http.get('admin/api/content/'+this.params.contentId, function(contents) {
        this.contents = contents
        this.params.files = contents.files
      })
    },
  }
}