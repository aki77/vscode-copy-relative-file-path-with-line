import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerTextEditorCommand(
    'copy-relative-file-path-with-line.copy',
    (editor) => {
      const relativePath = vscode.workspace.asRelativePath(editor.document.uri);
      const line = editor.selection.start.line + 1;
      vscode.env.clipboard.writeText([relativePath, line].join(':'));
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
