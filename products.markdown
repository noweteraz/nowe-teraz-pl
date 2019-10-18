---
title: Aukcje Charytatywne
layout: default
permalink: /aukcje/
color: yellow
---

<section class="feature--wide outro mt-30 mb-90">
<h2>Repliki - giclée dzieł Profesora Henryka Dąbrowskiego </h2>
<p>
Oferowane dzieła Henryka Dąbrowskiego są w postaci replik - giclée. Giclee zostały wykonane w oparciu o nowoczesne technologie oraz materiały najwyższej jakości i trwałości. W ofercie mamy dwie edycje prac, o limitowanym nakładzie. Prace w formacie rzeczywistym (50 sztuk) oraz zmniejszenia (200 sztuk). </p>
<p>
Do każdej pracy dołączony jest certyfikatem potwierdzającym autentyczność giclée oraz indywidualny numer. Ostatnie dziesięć egzemplarzy będą sprzedawane wyłącznie poprzez aukcję. Gwarantujemy, że po sprzedaży całych serii 50 sztuk wielkości oryginałów i 200 sztuk zmniejszeń prace nie będą miały kolejnych edycji.</p>
<p>
Prace pochądzą ze zbioru Jacka Filochowskiego jedynego spadkobiercy całej spuścizny artystycznej Profesora Henryka Dąbrowskiego.</p>


<h3>Gwarancja certyfikatu</h3>
<p>
Każdy Nabywca repliki, oraz jego następca otrzymuje prawo do odtworzenia nabytego egzemplarza w przypadku jego uszkodzenia pod warunkiem udokumentowania jego prawnego pochodzenia. Egzemplarz podlegający wymianie musi posiadać możliwy do zidentyfikowania certyfikat potwierdzający jego autentyczność.  </p>


</section>

{% for product in site.products %}
  {% include product.html %}
{% endfor %}