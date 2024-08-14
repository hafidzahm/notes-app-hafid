const buttonState = () => {
  window.addEventListener("change", function () {
    const value = document.getElementById("isArchived").checked;

    const target = document.getElementById("submit-button");

    if (value) {
      target.innerText = "Masukkan ke Arsip";
    } else {
      target.innerText = "Simpan catatan";
    }
  });
};

export default buttonState;

// const buttonState = () => {

// // window.addEventListener('change', function () {
// //     const value = document.getElementById('isArchived').checked;
// //     console.log(value);
// //     const target = document.getElementById('submit-button');
// //     console.log(target);
// //     if (value) {
// //         createSubmitButton()
// //         removeArchiveButton()
// //     } else {
// //         createArchiveButton()
// //         removeSubmitButton()
// //     }
// // });

// // function createSubmitButton() {
// //     const submitBtn = document.createElement('submit-button')
// //     const container = document.querySelector('sbt-btn')

// //     container.append(submitBtn)
// // }

// // function createArchiveButton() {
// //     const archiveBtn = document.createElement('archive-button')
// //     const container = document.querySelector('arc-btn')

// //     container.append(archiveBtn)

// // }

// // function removeSubmitButton() {
// //     const submitBtn = document.querySelector('submit-button')
// //     submitBtn.remove()
// // }

// // function removeArchiveButton() {
// //     const archiveBtn = document.querySelector('archive-button')
// //     archiveBtn.remove()

// // }

//     // Button state logic (after elements are rendered)
//     const isArchivedCheckbox = document.querySelector('#isArchived');
//     const submitButtonContainer = document.querySelector('.sbt-btn');
//     const archiveButtonContainer = document.querySelector('.arc-btn');

//     const updateButtonState = () => {
//       if (isArchivedCheckbox.checked) {
//         submitButtonContainer.replaceChildren(document.createElement('submit-button'));
//         archiveButtonContainer.innerHTML = ''; // Clear archive button
//       } else {
//         archiveButtonContainer.replaceChildren(document.createElement('archive-button'));
//         submitButtonContainer.innerHTML = ''; // Clear submit button
//       }
//     };

//     isArchivedCheckbox.addEventListener('change', updateButtonState);
//     updateButtonState(); // Set initial state

// }

// export default buttonState;
