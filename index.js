function test()
{
    var id = document.getElementById("text");
    var value = Number(id.value);
    value += 1;
    id.value = value;
}