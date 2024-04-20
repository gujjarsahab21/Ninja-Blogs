// rte ke andr inputs lenge :name, control(ye reacthookform se aata h), label,defaultvalue
// control kya krega jo bhi actual me is component se control pass on krega jo bhi isko call krega uske andr
// controller poora ka poora control pass kahi aur 
// imp hai render sbse phle iske andr callback h aur wapas curly braces leke usko field bolna pdega then tracking lagani pdegi  jo yaha hogo onchange arrow k right side jo bji element apko render karwana h
// editot copy paste krna h github se
import React from "react";
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({ name, control, label, defaultValue = "", apiKey }) {
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey= 'qo36h7eo3xlw6hq9ue4h2p8dt10qzsilmtgpoeb5kscz8etw'// Add the apiKey prop here
            initialValue={defaultValue}
            init={{
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
                "anchor",
              ],
              toolbar:
                "undo redo | formatselect | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
            onEditorChange={onChange}
          />
        )}
      />

    </div>
  )
}
