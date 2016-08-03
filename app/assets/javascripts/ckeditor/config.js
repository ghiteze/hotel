CKEDITOR.editorConfig = function (config) {
  config.toolbar = 'mini';
  config.toolbar_mini = [
        ['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
        ['NumberedList','BulletedList','-','Outdent','Indent'],
        ['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
        ['Link','Unlink'],
        ['Styles','Format','Font','FontSize'],
        ['TextColor','BGColor', 'Image', 'Source']
  ];

}