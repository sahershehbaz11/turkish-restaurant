var builder = WebApplication.CreateBuilder(args);
//add Service for MVC
builder.Services.AddControllersWithViews();
var app = builder.Build();


if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}

app.UseStaticFiles();
app.UseRouting();
app.MapControllerRoute(
name: "default",
pattern: "{Controller=Home}/{action=Index}/{id?}");


app.Run();
