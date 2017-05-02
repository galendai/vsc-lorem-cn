// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var chinesegen = require('chinesegen');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    var commands = [
        vscode.commands.registerCommand('vsc-lorem-cn.line', generateLine),
        vscode.commands.registerCommand('vsc-lorem-cn.paragraph', generateParagraph)
    ];

    commands.forEach(function (command){
        context.subscriptions.push(command);
    });
}

function insertText(text) {
  var editor = vscode.window.activeTextEditor;
  editor.edit(function (editBuilder) {
    editBuilder.delete(editor.selection);
  }).then(function () {
    editor.edit(function (editBuilder) {
      editBuilder.insert(editor.selection.start, text);
    });
  });
}

function generateLine() {
    insertText(chinesegen({ count: 20, freq: true }).text);
}

function generateParagraph() {
    insertText(chinesegen({ count: 200, freq: true }).text);
}
exports.activate = activate;

// // this method is called when your extension is deactivated
// function deactivate() {
// }
// exports.deactivate = deactivate;