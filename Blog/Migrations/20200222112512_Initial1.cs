using Microsoft.EntityFrameworkCore.Migrations;

namespace Blog.Migrations
{
    public partial class Initial1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_BlogPost",
                table: "BlogPost");

            migrationBuilder.RenameTable(
                name: "BlogPost",
                newName: "Blogposts");

            migrationBuilder.RenameColumn(
                name: "PostId",
                table: "Blogposts",
                newName: "Id");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Blogposts",
                maxLength: 250,
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "Creator",
                table: "Blogposts",
                maxLength: 150,
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "Body",
                table: "Blogposts",
                maxLength: 250,
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Blogposts",
                table: "Blogposts",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Blogposts",
                table: "Blogposts");

            migrationBuilder.RenameTable(
                name: "Blogposts",
                newName: "BlogPost");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "BlogPost",
                newName: "PostId");

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "BlogPost",
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 250);

            migrationBuilder.AlterColumn<string>(
                name: "Creator",
                table: "BlogPost",
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 150);

            migrationBuilder.AlterColumn<string>(
                name: "Body",
                table: "BlogPost",
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 250);

            migrationBuilder.AddPrimaryKey(
                name: "PK_BlogPost",
                table: "BlogPost",
                column: "PostId");
        }
    }
}
