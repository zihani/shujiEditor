
export default class tinymceApi {
     constructor(id) {
          this.id = id;
     }
     tinymce() {
          return window.tinymce.get(this.id);
     }
}