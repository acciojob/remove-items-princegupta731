//your JS code here. If required.

    function removeColor() {
      const select = document.getElementById("colorSelect");
      const index = select.selectedIndex;
      if (index !== -1) {
        select.remove(index);
      }
    }