using Microsoft.EntityFrameworkCore.Migrations;

namespace Leo.Migrations
{
    public partial class ChangeCarToDecimal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "price",
                table: "Car",
                nullable: false,
                oldClrType: typeof(float));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<float>(
                name: "price",
                table: "Car",
                nullable: false,
                oldClrType: typeof(decimal));
        }
    }
}
