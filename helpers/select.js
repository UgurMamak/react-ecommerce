function secondaryMultipleSelect(item, config = {}) {
  const $select = item;
  const selectId = $select.attr("id");
  let cloneSelect = $(`#${selectId}Clone`);

  if (!cloneSelect.length) {
    cloneSelect = $select
      .clone(true, true)
      .attr("id", `${selectId}Clone`)
      .css("display", "none");
    $select.before(cloneSelect);

    $select.on("select2:select", (e) => {
      const indexNumber = $(e.currentTarget)
        .find(`[value="${e.params.data.id}"]`)
        .index();
      $(e.currentTarget)
        .find("option")
        .eq(indexNumber)
        .before(
          `<option value="${e.params.data.id}">${e.params.data.text}</option>`
        );
    });

    $select.on("select2:unselect", (e) => {
      e.params.data.element.remove();
    });
  } else {
    $select.select2("destroy");

    $select.children().remove();
    const optionList = cloneSelect.children().clone();

    optionList.each((index, item) => {
      $select.append(item);
    });
  }

  function formatResultData(data) {
    if (!data.id) return data.text;
    if (data.element.selected) return;
    return data.text;
  }

  const defaultConfig = {
    width: "100%",
    minimumResultsForSearch: -1,
    placeholder: $select.attr("data-placeholder"),
    containerCssClass: $select.attr("data-container-class"),
    dropdownCssClass: $select.attr("data-dropdown-class"),
    dropdownParent: $select.parent(),
    dropdownPosition: "below",
    templateResult: formatResultData,
    tags: true,
  };

  const editConfig = Object.assign(defaultConfig, config);
  $select.select2(editConfig);
}
