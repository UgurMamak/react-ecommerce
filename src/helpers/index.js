String.prototype.interpolate = function (params) {
  const names = Object.keys(params);
  const vals = Object.values(params);
  return new Function(...names, `return \`${this}\`;`)(...vals);
};

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

// Personal Info Form
(function () {
  const form = $("#personalInfoForm");

  if (!form.length) return false;

  const progressWrap = $(".progress-wrapper");
  const progressBar = progressWrap.find(".progress-bar");
  const barStatus = progressWrap.find(".bar-status");
  const barStatusText = barStatus.find(".inner");
  const childAgeSelect = form.find("#childAge");
  const childNumberSelect = form.find("#childCount");
  const sectorSelect = form.find("#sectorSelect");
  const occupationSelect = form.find("#occupationSelect");

  /* childAgeSelect.select2({
          placeholder: childAgeSelect.attr("data-placeholder")
      }); */

  if (childNumberSelect.val()) {
    setTimeout(() => {
      changedChildNumber(
        childNumberSelect.find("option:selected").attr("data-number")
      );
    });
  }

  childNumberSelect.on("change", (e) => {
    childAgeSelect.val(null).trigger("change");

    changedChildNumber(
      $(e.currentTarget).find("option:selected").attr("data-number")
    );
  });

  function changedChildNumber(value) {
    if (value == childNumberSelect.attr("data-null-value")) {
      childAgeSelect.val(null).trigger("change");
      childAgeSelect.parent(".form-group").addClass("d-none");
    } else {
      secondaryMultipleSelect(childAgeSelect, {
        maximumSelectionLength: value,
        language: {
          maximumSelected(e) {
            const max = e.maximum;
            const result = childAgeSelect
              .attr("data-msg-multiple")
              .interpolate({
                text: max,
              });
            return result;
          },
        },
      });

      setTimeout(() => {
        console.log("here", childAgeSelect);
        childAgeSelect.parent(".form-group").removeClass("d-none");
      });
    }
  }

  form.find("select").on("change", (e) => {
    const that = $(e.currentTarget);
    const wrap = that.closest(".form-group");

    wrap.removeClass("has-error");
    wrap.find(".error").remove();
  });

  /* var sectorNewFormat = $.map(window.sectorData, function (obj) {
          let newObj = {};
          newObj.id = obj.sectorUuid;
          newObj.text = obj.sectorText;
          return newObj;
      });

      sectorNewFormat.unshift({id: '', text: ''}); */

  sectorSelect.on("change", (e) => {
    const that = $(e.currentTarget);
    const filterData = window.sectorData.filter(
      (obj) => obj.sectorUuid === that.val()
    );
    occupationSelect.empty();

    if (filterData[0].occupations.length === 0) {
      occupationSelect.prop("disabled", true);
      return;
    }

    filterData[0].occupations.unshift({ id: "", text: "" });

    filterData[0].occupations.map((obj) => {
      const newOption = new Option(
        obj.occupationText,
        obj.occupationUuid,
        false,
        obj.occupationSelected
      );
      occupationSelect.append(newOption).trigger("change");
    });

    occupationSelect.prop("disabled", false);
  });

  window.sectorData.map((obj) => {
    const newOption = new Option(
      obj.sectorText,
      obj.sectorUuid,
      false,
      obj.sectorSelected
    );
    sectorSelect.append(newOption);
    obj.sectorSelected && sectorSelect.val(obj.sectorUuid).trigger("change");
  });

  $.validator.addClassRules({
    required: {
      required: true,
    },
  });

  form.validate({
    ignore: ":hidden",
    highlight(elem) {
      const $elem = $(elem);
      const wrap = $elem.closest(".form-group");

      wrap.addClass("has-error");
      wrap.find(".error").remove();
    },
    unhighlight(elem) {
      const $elem = $(elem);
      const wrap = $elem.closest(".form-group");

      wrap.removeClass("has-error");
      wrap.find(".error").remove();
    },
    errorPlacement(error, elem) {
      const $elem = $(elem);

      if ($elem.attr("type") !== "checkbox") {
        $elem.closest(".form-group").append(error);
      }
    },
    submitHandler(elem) {
      const $form = $(elem);
      const formInput = $form.find("input, textarea, select");
      const formData = {};

      formInput.each((index, item) => {
        const $item = $(item);

        if ($item.val()) {
          if ($item.attr("multiple")) {
            const valueArray = $(item).val();
            if (valueArray.length > 0) {
              formData[$item.attr("name")] = [];
              valueArray.forEach((item) => {
                /*  if($item.find('[value="'+item+'"]').attr('data-number')){
                                      formData[$item.attr("name")].push({answerUuid: $item.find('[value="'+item+'"]').attr('data-number')});
                                      return;
                                  } */
                formData[$item.attr("name")].push({ answerUuid: item });
              });
            }
          } else {
            formData[$item.attr("name")] = [];

            /* if($item.find('[value="'+$item.val()+'"]').attr('data-number')){
                              formData[$item.attr("name")].push({answerUuid: $item.find('[value="'+$item.val()+'"]').attr('data-number')});
                              return;
                          } */

            formData[$item.attr("name")].push({ answerUuid: $(item).val() });
          }
        }
      });

      $.ajax({
        url: $form.attr("action"),
        method: "POST",
        dataType: "json",
        data: JSON.stringify(formData),
        contentType: "application/json",
        success(res) {
          if (res.status === "success") {
            progressBar
              .css("width", `${res.barValue}%`)
              .attr("aria-valuenow", res.barValue);
            barStatus.css("left", `${res.barValue}%`);
            barStatusText.text(`%${res.barValue}`);
          }

          Swal.fire({
            type: res.status,
            title: res.title,
            text: res.message,
            confirmButtonText: res.buttonText,
          });
        },
      });

      return false;
    },
  });
})();

if (document.getElementById("addressPage")) {
  new Vue({
    el: "#addressPage",
    data: {
      // alphanumericMask: [/[a-zA-ZçğıöşüÇĞİÖŞÜ0-9 ]+$/],
      alphanumericMask: [/^[A-Za-z0-9çğıöşüÇĞİÖŞÜ ]*$/],
      test: [],
      countryData: null,
      cityData: null,
      districtData: null,
      formIsCityDisabled: true,
      addressData: [],
      showEditForm: false,
      showAddForm: false,
      currentEditingAddress: {},
      editFormCountryChangeStatus: true,
      editFormCityChangeStatus: true,
      editFormIsCityDisabled: true,
      editFormDistrictChangeStatus: true,
      editFormIsDistrictDisabled: true,
      editFormNeighborhoodData: null,
      editFormIsNeighborhoodDisabled: true,
      addFormCountryChangeStatus: true,
      addFormCityChangeStatus: true,
      addFormIsCityDisabled: true,
      addFormIsDistrictDisabled: true,
      addFormNeighborhoodData: null,
      addFormIsNeighborhoodDisabled: true,
    },
    methods: {
      alphanumericControl(event) {
        const regex = /^[A-Za-z0-9çğıöşüÇĞİÖŞÜ ]*$/;

        const control = regex.test(event.key);

        if (!control) {
          event.preventDefault();
        }
      },
      editFormChangeCountry(name, value, type) {
        this.editFormIsCityDisabled = false;
        this.editFormIsDistrictDisabled = false;
        this.districtData = null;
        this.editFormNeighborhoodData = null;

        if (this.editFormCountryChangeStatus === true) {
          this.currentEditingAddress.addressCity = "";
          this.currentEditingAddress.addressDistrict = "";
          this.currentEditingAddress.addressNeighborhood = "";
        } else {
          this.editFormCountryChangeStatus = true;
        }

        this.countryData.some((country) => {
          if (country.code === value) {
            this.cityData = country.cities.length ? country.cities : null;
            return true;
          }
        });

        setTimeout(() => {
          initInputMask();
        });
      },
      editFormChangeCity(name, value, event) {
        let districtList;

        this.cityData.some((city) => {
          if (city.code === value) {
            districtList = city.districts.length ? city.districts : null;
            return true;
          }
        });

        this.editFormIsDistrictDisabled = false;
        this.districtData = null;
        this.editFormNeighborhoodData = null;

        if (this.editFormCityChangeStatus === true) {
          this.currentEditingAddress.addressDistrict = "";
          this.currentEditingAddress.addressNeighborhood = "";
        } else {
          this.editFormCityChangeStatus = true;
        }

        setTimeout(() => {
          this.districtData = districtList;
          initInputMask();
        });
      },
      editFormChangeDistrict(name, value, event) {
        let neighborhoodList;

        if (value) {
          this.editFormIsNeighborhoodDisabled = false;
          this.editFormNeighborhoodData = null;
          $.get(
            window.neighborhoodsDataUrl,
            { code: value },
            (res) => {
              this.editFormNeighborhoodData = res.neighborhoods.length
                ? res.neighborhoods
                : null;
            },
            "JSON"
          );
        }
        /*  this.districtData.some((district) => {
                      if (district.code === value) {
                          neighborhoodList = district.neighborhoods.length ? district.neighborhoods : null;
                          return true;
                      }
                  }); */

        if (this.editFormDistrictChangeStatus === true) {
          this.currentEditingAddress.addressNeighborhood = "";
        } else {
          this.editFormDistrictChangeStatus = true;
        }

        setTimeout(() => {
          // this.editFormNeighborhoodData = neighborhoodList;
          initInputMask();
        });
      },
      editAddress(address) {
        const cloneAddress = { ...address };

        this.showEditForm = true;
        this.showAddForm = false;
        this.currentEditingAddress = cloneAddress;

        setTimeout(() => {
          const $editAddressForm = $("#editAddress");

          this.editFormCountryChangeStatus = false;
          $editAddressForm
            .find('[name="country"]')
            .val(cloneAddress.addressCountry)
            .trigger("change");
          setTimeout(() => {
            this.editFormCityChangeStatus = false;
            $editAddressForm
              .find('[name="city"]')
              .val(cloneAddress.addressCity)
              .trigger("change");

            setTimeout(() => {
              this.editFormDistrictChangeStatus = false;
              $editAddressForm
                .find('[name="district"]')
                .val(cloneAddress.addressDistrict)
                .trigger("change");

              setTimeout(() => {
                $editAddressForm
                  .find('[name="neighborhood"]')
                  .val(cloneAddress.addressNeighborhood)
                  .trigger("change");
              }, 100);
            });
          });
          $editAddressForm
            .find("#addressStatus")
            .prop("checked", cloneAddress.addressStatus)
            .iCheck("update");
        });
      },
      addFormChangeCountry(name, value) {
        this.addFormIsCityDisabled = false;
        this.addFormIsDistrictDisabled = false;
        this.districtData = null;
        this.addFormNeighborhoodData = null;

        if (this.addFormCountryChangeStatus === true) {
          this.currentEditingAddress.addressCity = "";
          this.currentEditingAddress.addressDistrict = "";
          this.currentEditingAddress.addressNeighborhood = "";
        } else {
          this.addFormCountryChangeStatus = true;
        }

        this.countryData.some((country) => {
          if (country.code === value) {
            this.cityData = country.cities.length ? country.cities : null;
            return true;
          }
        });
        setTimeout(() => {
          initInputMask();
        });
      },
      addFormChangeCity(name, value, event) {
        let districtList;

        this.cityData.some((city) => {
          if (city.code === value) {
            districtList = city.districts.length ? city.districts : null;
            return true;
          }
        });

        this.addFormIsDistrictDisabled = false;
        this.districtData = null;
        this.addFormNeighborhoodData = null;

        if (this.addFormCityChangeStatus === true) {
          this.currentEditingAddress.addressDistrict = "";
          this.currentEditingAddress.addressNeighborhood = "";
        } else {
          this.addFormCityChangeStatus = true;
        }

        setTimeout(() => {
          this.districtData = districtList;
          initInputMask();
        });
      },
      addFormChangeDistrict(name, value, event) {
        let neighborhoodList;

        if (value) {
          this.addFormIsNeighborhoodDisabled = false;
          this.addFormNeighborhoodData = null;
          $.get(
            window.neighborhoodsDataUrl,
            { code: value },
            (res) => {
              this.addFormNeighborhoodData = res.neighborhoods.length
                ? res.neighborhoods
                : null;
            },
            "JSON"
          );
        }
        /* this.districtData.some((district) => {
                      if (district.code === value) {
                          neighborhoodList = district.neighborhoods.length ? district.neighborhoods : null;
                          return true;
                      }
                  }); */

        if (this.addFormDistrictChangeStatus === true) {
          this.currentEditingAddress.addressNeighborhood = "";
        } else {
          this.addFormDistrictChangeStatus = true;
        }

        setTimeout(() => {
          // this.addFormNeighborhoodData = neighborhoodList;
          initInputMask();
        });
      },
      createAddress() {
        this.showEditForm = false;
        this.showAddForm = true;
      },
      resetForm(elem) {
        this.showAddForm = false;
        this.showEditForm = false;

        setTimeout(() => {
          const $form = $(elem);

          $form.trigger("reset");
          $form.find("select").val(null).trigger("change");
          $form
            .find('input[type="radio"], input[type="checkbox"]')
            .iCheck("update");
          $('[data-toggle="defaultAddress"]').iCheck("update");
        });
      },
      submitForm(event) {
        const $form = $(event.target);
        const btnSubmit = $form.find('button[type="submit"]');

        if ($form.valid()) {
          btnSubmit.prop("disabled", true).addClass("disabled");

          $.post(
            $form.attr("action"),
            $form.serialize(),
            (res) => {
              btnSubmit.prop("disabled", false).removeClass("disabled");

              if (res.status === "success") {
                this.resetForm($form);

                this.addressData = res.addressData;
                $('[data-toggle="defaultAddress"]').iCheck("destroy");

                initThirdPartyPlugin();

                this.$nextTick(() => {
                  this.changeDefaultAddress();
                });
              }

              Swal.fire({
                type: res.status,
                title: res.message.title,
                text: res.message.text,
                confirmButtonText: res.message.confirmButton,
                confirmButtonColor: "#0E78BD",
              });
            },
            "JSON"
          );
        }
      },
      deleteAddress(id, ajaxUrl) {
        Swal.fire({
          type: "warning",
          title: window.modalTexts.title,
          text: window.modalTexts.message,
          showCancelButton: true,
          confirmButtonColor: "#0E78BD",
          cancelButtonColor: "#d33",
          confirmButtonText: window.modalTexts.confirmButton,
          cancelButtonText: window.modalTexts.cancelButton,
        }).then((result) => {
          if (result.value) {
            $.post(
              ajaxUrl,
              { addressId: id },
              (res) => {
                if (res.status === "success") {
                  this.addressData = this.addressData.filter((item) => {
                    if (item.addressId != id) return true;
                  });
                }

                Swal.fire({
                  type: res.status,
                  title: res.message.title,
                  text: res.message.text,
                  confirmButtonText: res.message.confirmButton,
                  confirmButtonColor: "#0E78BD",
                });
              },
              "JSON"
            );
          }
        });
      },
      changeDefaultAddress() {
        const defaultAddress = $('[data-toggle="defaultAddress"]');

        defaultAddress.unbind();
        defaultAddress.each((index, item) => {
          const ajaxUrl = $(item).attr("data-ajax-url");

          $(item).on("ifChecked", (e) => {
            $.post(
              ajaxUrl,
              { addressId: e.target.value },
              (res) => {
                if (res.status === "success") {
                  this.addressData = res.addressData;
                }

                Swal.fire({
                  type: res.status,
                  title: res.message.title,
                  text: res.message.text,
                  confirmButtonText: res.message.confirmButton,
                  confirmButtonColor: "#0E78BD",
                });
              },
              "JSON"
            );
          });
        });
      },
    },
    beforeCreate() {
      $.get(
        window.addressDataUrl,
        (res) => {
          this.countryData = res.countries;
          this.formIsCityDisabled = false;
          this.addressData = window.userAddress;

          initThirdPartyPlugin();

          this.$nextTick(() => {
            this.changeDefaultAddress();
          });
        },
        "JSON"
      );
    },
    mounted() {
      (function () {
        const $form = $("#addAddress, #editAddress");

        if (!$form.length) return false;

        setTimeout(() => {
          initInputMask();
        });

        $form.each((index, item) => {
          const $item = $(item);

          $item.find("select").on("change", (e) => {
            const that = $(e.currentTarget);
            const wrap = that.closest(".form-group");

            wrap.removeClass("has-error");
            wrap.find(".error").remove();
          });

          $.validator.addClassRules({
            required: {
              required: true,
            },
            requiredMinLength: {
              required: true,
              minlength: 2,
            },
          });

          $item.validate({
            ignore: ":hidden",
            highlight(elem) {
              const $elem = $(elem);
              const wrap = $elem.closest(".form-group");

              wrap.addClass("has-error");
              wrap.find(".error").remove();
            },
            unhighlight(elem) {
              const $elem = $(elem);
              const wrap = $elem.closest(".form-group");

              wrap.removeClass("has-error");
              wrap.find(".error").remove();
            },
            errorPlacement(error, elem) {
              const $elem = $(elem);

              if ($elem.attr("type") !== "checkbox") {
                $elem.closest(".form-group").append(error);
              }
            },
            submitHandler(elem) {
              return true;
            },
          });
        });
      })();
    },
  });
}

(function () {
  const secondaryMultipleSelectElem = $(
    '[data-item="secondaryMultipleSelect"]'
  );

  if (secondaryMultipleSelectElem.length) {
    secondaryMultipleSelectElem.each((index, item) => {
      secondaryMultipleSelect($(item));
    });
  }
})();
