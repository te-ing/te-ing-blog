---
title: Markdown blog truncation example
description: 메타데이터 description
date: 2021-09-13T10:00
slug: welcome-docusaurus-v2
authors:
  - name: Taejung Kim
    title: creator of te-ing-blog
    url: https://github.com/te-ing
    image_url: https://avatars.githubusercontent.com/u/76410985?v=4
tags: [hello, docusaurus-v2]
image: https://i.imgur.com/mErPwqL.png 메타데이터 이미지
hide_table_of_contents: false
---

1. 게시글 요약 표시하기
<!-- truncate -->의 상단 내용은  블로그 게시글 위의 내용을 요약으로 표시합니다.

2. 태그 링크 설정하기

---

title: 'My blog post'
tags:

- Releases
- docusaurus

---

일 때,
blog/tags.yml
docusaurus:
label: 'Docusaurus'
permalink: '/docusaurus'
description: 'Blog posts related to the Docusaurus framework'
과 같이 작성하면 태그에 대한 링크 및 설명을 넣을 수 있습니다.
