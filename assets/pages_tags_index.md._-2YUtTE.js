import{d as l}from"./chunks/posts.data.hXMy_Uc2.js";import{d as f,c as i,m as r,t as n,F as p,G as h,o as c}from"./chunks/framework.yBzoR3F1.js";const g={class:"tags"},_=["href"],y=JSON.parse('{"title":"标签","description":"","frontmatter":{"title":"标签","aside":false,"prev":false,"next":false},"headers":[],"relativePath":"pages/tags/index.md","filePath":"pages/tags/index.md"}'),m={name:"pages/tags/index.md"},E=f({...m,setup(u){const o=new Set;l.forEach(e=>{e.tags&&e.tags.forEach(t=>o.add(t))});const d=Array.from(o),s=[];return d.forEach(e=>s.push({key:e,posts:[]})),l.forEach(e=>{s.forEach(t=>{e.tags.includes(t.key)&&t.posts.push({title:e.title,url:e.url.split(".")[0]})})}),(e,t)=>(c(),i("div",null,[r("h1",null,"共有 "+n(s.length)+" 个标签",1),r("div",g,[(c(),i(p,null,h(s,a=>r("a",{href:"/pages/tags/"+a.key},n(a.key)+" ("+n(a.posts.length)+") ",9,_)),64))])]))}});export{y as __pageData,E as default};