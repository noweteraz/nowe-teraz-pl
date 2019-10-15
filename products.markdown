---
title: Aukcje Charytatywne
layout: default
permalink: /aukcje/
color: yellow
published: true
---
{% for product in site.products %}
  {% include product.html %}
{% endfor %}
