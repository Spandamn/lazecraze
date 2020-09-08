import java.io.*;

public class Threen1 {
    BufferedReader in = new BufferedReader(new InputStreamReader(System.in));

    int getCycleLength (int num) {
        int count = 1;
        while (num != 1) {
            num = num % 2 == 0 ? num / 2 : (num * 3) + 1;
            count++;
        }
        return count;
    }

    public static void main (String args[]) throws IOException {
        int n1, n2;
        Threen1 ob = new Threen1();
        System.out.println("Please provide input");
        String[] inp = ob.in.readLine().split(" ");
        n1 = Integer.parseInt(inp[0]);
        n2 = Integer.parseInt(inp[1]);
        int high = 0;
        for (int i = n1; i <= n2; i++) {
            int current = ob.getCycleLength(i);
            if (current > high) high = current;
        }
        System.out.println(n1 + " " + n2 + " " + high);
    }
}