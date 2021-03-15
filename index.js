function test()
{
    var id = document.getElementById("textbox");
    var value = Number(id.value);
    value += 1;
    id.value = value;
}
