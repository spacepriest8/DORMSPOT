function ListProperty() {
  // document
  //   .getElementById("propertyForm")
  //   .addEventListener("submit", function (e) {
  //     e.preventDefault();

  //     const messageBox = document.createElement("div");
  //     messageBox.innerText =
  //       "Thank you, you have successfully submitted your listing!";
  //     messageBox.style.position = "fixed";
  //     messageBox.style.top = "20%";
  //     messageBox.style.left = "50%";
  //     messageBox.style.transform = "translateX(-50%)";
  //     messageBox.style.backgroundColor = "#0057d8";
  //     messageBox.style.color = "white";
  //     messageBox.style.padding = "20px 30px";
  //     messageBox.style.borderRadius = "10px";
  //     messageBox.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  //     messageBox.style.fontSize = "16px";
  //     messageBox.style.zIndex = "1000";

  //     document.body.appendChild(messageBox);

  //     // Remove the message after 3 seconds
  //     setTimeout(() => {
  //       messageBox.remove();
  //       document.getElementById("propertyForm").reset();
  //     }, 3000);
  //   });
  return (
    <div class="propertycontainer">
      <a href="#" class="back-link">
        ← Back
      </a>
      <header>
        <h2>
          List a <span className="propertytext">New </span>Property
        </h2>
      </header>
      <form id="propertyForm">
        <div class="form-group">
          <label for="Proname">Property Name</label>
          <input
            type="text"
            id="Proname"
            placeholder="Enter property name"
            required
          />
        </div>

        <div class="form-group">
          <label for="type">Property Type</label>
          <input
            type="text"
            id="type"
            placeholder="Enter property type"
            required
          />
        </div>

        <div class="form-group">
          <label for="cation">Location</label>
          <input
            type="text"
            id="cation"
            placeholder="Enter property address"
            required
          />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="price">Price (#)</label>
            <input type="text" id="price" placeholder="Enter amount" required />
          </div>
          <div class="form-group">
            <label for="month">Payment Duration</label>
            <input type="text" id="month" placeholder="e.g. Monthly" required />
          </div>
        </div>

        <div class="form-group">
          <label>Amenities</label>
          <div class="checkboxes">
            <div>
              <label>
                <input type="checkbox" /> Wi-Fi
              </label>
              <label>
                <input type="checkbox" /> Water
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" /> Power Supply
              </label>
              <label>
                <input type="checkbox" /> Furnished
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" /> Kitchen
              </label>

              <label>
                <input type="checkbox" /> Ensuite
              </label>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="file">Upload Photos</label>
          <input type="file" id="file" multiple />
        </div>

        <div class="form-group contactinput">
          <label>Contact Information</label>
          <input type="text" placeholder="Phone Number" required />
          <input
            type="text"
            placeholder="Whatsapp Number (Optional)"
            required
          />
          <input type="text" placeholder="Email" required />
        </div>

        <div class="form-actions">
          <button type="submit">Submit Listing</button>
          <button type="reset" class="cancel-btn">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
export default ListProperty;
