---
title: Eleventy Blog
layout: layouts/docs.njk
eleventyComputed:
  social:
    description: "An Eleventy blog post published on {{ page.date | newsDate('LLLL yyyy') }}."
---

# {{ newstitle }}

<div class="fl fl-inline fl-separator-h fl-nowrap mb-4" style="--fl-gap-h: 1.5em; --fl-gap-v: .5em">
  <div>
    <em>{{ page.date | newsDate }}</em>
  </div>
{%- if postAuthor and postAuthors[postAuthor] %}
	<div>
    <a href="{{ postAuthors[postAuthor] }}" class="elv-externalexempt">{% indieavatar postAuthors[postAuthor] %}{{ postAuthor }}</a>
  </div>
{%- endif %}
  <div>
    {% emoji "📢" %} <a href="/blog/feed.xml">Subscribe to the Eleventy News Feed</a>
  </div>
</div>

{{ content | safe }}

{% if not hideRelatedBlogPosts %}
---

### Read more blog posts:

{% set previousPost = collections.blog | getPreviousCollectionItem(page) %}
{% set nextPost = collections.blog | getNextCollectionItem(page) %}

{% if nextPost %}- Next: <a href="{{ nextPost.url }}">{{ nextPost.data.newstitle }}</a>{% endif %}
{% if previousPost %}- Previous: <a href="{{ previousPost.url }}">{{ previousPost.data.newstitle }}</a>{% endif %}

{%- endif %}