using Microsoft.EntityFrameworkCore.Migrations;

namespace Leo.Migrations
{
    public partial class CarInImg2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Img_Car_Carid",
                table: "Img");

            migrationBuilder.RenameColumn(
                name: "Carid",
                table: "Img",
                newName: "carId");

            migrationBuilder.RenameIndex(
                name: "IX_Img_Carid",
                table: "Img",
                newName: "IX_Img_carId");

            migrationBuilder.AlterColumn<int>(
                name: "carId",
                table: "Img",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Img_Car_carId",
                table: "Img",
                column: "carId",
                principalTable: "Car",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Img_Car_carId",
                table: "Img");

            migrationBuilder.RenameColumn(
                name: "carId",
                table: "Img",
                newName: "Carid");

            migrationBuilder.RenameIndex(
                name: "IX_Img_carId",
                table: "Img",
                newName: "IX_Img_Carid");

            migrationBuilder.AlterColumn<int>(
                name: "Carid",
                table: "Img",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Img_Car_Carid",
                table: "Img",
                column: "Carid",
                principalTable: "Car",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
