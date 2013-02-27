{% extends layout %}
{% block content %}
<div class="hero-unit">
  <h2 class="name">{{ thing.name }}</h2>
  <a href="/things/{{params.id}}/edit" class="btn pull-right">Edit this thing</a>
</div>

<h2>Thing Properties</h2>
{% for prop in thing %}
<div class="row list-item">
  <div class="span4">
    <h3>{{loop.key}}</h3>
  </div>
  <div class="span8">
    <h3><i class="icon-list-alt"></i><span class="">{{ prop }}</span></h3>
  </div>
</div>
{% endfor %}

{% endblock %}