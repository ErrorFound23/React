// https://www.tiny.cloud/docs/tinymce/latest/react-cloud/
// https://react-hook-form.com/get-started#IntegratingControlledInputs
import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

const RTE = ({ name, control, label, defaultValue = "" }) => {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="y67ohrlrd97sthdljur0qu9oo3m177ntnxpdgji7n5764otp"
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              branding: false,
              height: 500,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>

    // <Editor
    //   initialValue="default value"
    //   init={{
    //     branding: false,
    //     height: 500,
    //     menubar: true,
    //     plugins: [
    //       "advlist",
    //       "autolink",
    //       "lists",
    //       "link",
    //       "image",
    //       "charmap",
    //       "preview",
    //       "anchor",
    //       "searchreplace",
    //       "visualblocks",
    //       "code",
    //       "fullscreen",
    //       "insertdatetime",
    //       "media",
    //       "table",
    //       "code",
    //       "help",
    //       "wordcount",
    //     ],
    //     toolbar:
    //       "undo redo | blocks | " +
    //       "bold italic forecolor | alignleft aligncenter " +
    //       "alignright alignjustify | bullist numlist outdent indent | " +
    //       "removeformat | help",
    //   }}
    // ></Editor>
  );
};

export default RTE;
