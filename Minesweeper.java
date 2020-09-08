import java.io.*;

public class Minesweeper {
    public static void main (String args[]) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("Enter the dimensions");
        String dim[] = in.readLine().split(" ");
        String field[][] = new String[Integer.parseInt(dim[0])][Integer.parseInt(dim[1])];
        System.out.println("Enter the field");
        for (int i = 0; i < field.length; i++) {
            field[i] = in.readLine().split("");
        }
        String minefield[][] = new String[field.length][field[0].length];
        for (int i = 0; i < field.length; i++) {
            for (int j = 0; j < field[i].length; j++) {
                if (field[i][j].equals("*")) {
                    minefield[i][j] = "*";
                } else {
                    int minecount = 0;
                    if (i - 1 >= 0 && field[i - 1][j].equals("*")) minecount++;
                    if (i + 1 < field.length && field[i + 1][j].equals("*")) minecount++;
                    if (j - 1 >= 0 && field[i][j - 1].equals("*")) minecount++;
                    if (j + 1 < field[i].length && field[i][j + 1].equals("*")) minecount++;
                    if (i - 1 >= 0 && j + 1 < field[i].length && field[i - 1][j + 1].equals("*")) minecount++;
                    if (j - 1 >= 0 && i + 1 < field.length && field[i + 1][j - 1].equals("*")) minecount++;
                    if (j + 1 < field[i].length && i + 1 < field.length && field[i + 1][j + 1].equals("*")) minecount++;
                    if (i - 1 >= 0 && j - 1 >= 0 && field[i - 1][j - 1].equals("*")) minecount++;
                    minefield[i][j] = "" + minecount;
                }
            }
        }
        for (int i = 0; i < minefield.length; i++) {
            for (int j = 0; j < minefield.length; j++) {
                System.out.print(minefield[i][j]);
            }
            System.out.println();
        }
    }
}
