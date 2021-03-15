function test()
{
    var result = confirm("test");
    var id = document.getElementById("textbox");
    var value = Number(id.value);
    value = 5;
    id.value = value;
}
