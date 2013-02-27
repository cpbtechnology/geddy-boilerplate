{% extends layout %}
{% block content %}
<div class="hero-unit">
  <form id="thing-form" class="form-horizontal" action="/things/{{params.id}}?_method=PUT" method="POST">
    <fieldset>
      <legend>Update this Thing</legend>
      {% if params.errors %}
      <div class="control-group">
        <ul>
        {% for err in params.errors %}
          <li>{{err}}</li>
        {% endfor %}
        </ul>
      </div>
      {% endif %}

                  <div class="control-group">
        <label for="name" class="control-label">name</label>
        <div class="controls">
                      <input type="text" class="span6" name="name" value="{{thing.name}}" />
                    </div>
      </div>
                                    <div class="control-group">
        <label for="description" class="control-label">description</label>
        <div class="controls">
                      <input type="text" class="span6" name="description" value="{{thing.description}}" />
                    </div>
      </div>
            
      <div class="form-actions">
        <input type="submit" class="btn btn-primary" value="Save" />
        <input type="submit" class="btn btn-danger" value="Delete" formaction="/things/{{params.id}}?_method=DELETE" />
      </div>
    </fieldset>
  </form>
</div>
{% endblock %}