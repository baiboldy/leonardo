using Microsoft.EntityFrameworkCore.Migrations;

namespace Leo.Migrations
{
    public partial class TDDbContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "name",
                table: "Car",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "name",
                table: "Car",
                nullable: true,
                oldClrType: typeof(string));
        }
    }
}
