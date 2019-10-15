---
title: Aukcje Charytatywne
layout: default
permalink: aukcje
color: yellow
---
{% for product in site.products %}
  {% include product.html %}
{% endfor %}