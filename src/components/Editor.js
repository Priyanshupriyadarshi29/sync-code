import React, { useEffect, useRef } from "react";
import { language, cmtheme } from "../../src/atoms";
import { useRecoilValue } from "recoil";
import ACTIONS from "../actions/Actions";

// MONACO
import Editor, { useMonaco } from "@monaco-editor/react";

const MonacoRealtimeEditor = ({ socketRef, roomId, onCodeChange }) => {
  const editorRef = useRef(null);
  const monacoInstance = useMonaco();
  const lang = useRecoilValue(language);
  const editorTheme = useRecoilValue(cmtheme);

  // Initialize Monaco reference
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    editor.onDidChangeModelContent((event) => {
      const code = editor.getValue();
      onCodeChange(code);
      if (event.isFlush) return;
      if (socketRef.current) {
        socketRef.current.emit(ACTIONS.CODE_CHANGE, { roomId, code });
      }
    });
  }

  // Listen for code updates from socket
  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
        if (code !== null && editorRef.current) {
          const current = editorRef.current.getValue();
          if (current !== code) {
            editorRef.current.setValue(code);
          }
        }
      });
    }
    return () => {
      if (socketRef.current) {
        socketRef.current.off(ACTIONS.CODE_CHANGE);
      }
    };
  }, [socketRef.current]);

  return (
    <Editor
      height="100vh"
      defaultLanguage={lang || "javascript"}
      theme={editorTheme || "vs-dark"}
      defaultValue="// Start coding..."
      onMount={handleEditorDidMount}
      options={{
        automaticLayout: true,
        wordWrap: "on",
        minimap: { enabled: false },
        fontSize: 14,
      }}
    />
  );
};

export default MonacoRealtimeEditor;
