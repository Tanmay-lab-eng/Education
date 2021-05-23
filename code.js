setScreen("welcomeScreen");
onEvent("proceed1", "click", function( ) {
  setScreen("lobby_screen");
});
onEvent("reminder_button", "click", function( ) {
  setScreen("reminder_screen");
});
onEvent("reminder_setbutton", "click", function( ) {
  setText("label4", getText("text_input1"));
  setScreen("lobby_screen");
});
onEvent("cancel_buttton", "click", function( ) {
  setScreen("lobby_screen");
});
onEvent("button4", "click", function( ) {
  setText("label4", "You don't have any tasks right now. PRO Tip : Please delete your reminder after your previous reminder is done");
});
onEvent("button3", "click", function( ) {
  setScreen("EduPlatforms");
});
onEvent("Note_button", "click", function( ) {
  setText("label6", getText("text_input2"));
});
onEvent("button8", "click", function( ) {
  setScreen("lobby_screen");
});
onEvent("button1", "click", function( ) {
  setScreen("lobby_screen2");
});
onEvent("button2", "click", function( ) {
  setScreen("lobby_screen");
});
onEvent("button5", "click", function( ) {
  setScreen("lobby_screen3");
});
onEvent("button6", "click", function( ) {
  setScreen("lobby_screen2");
});
onEvent("button7", "click", function( ) {
  setScreen("lobby_screen3");
});
