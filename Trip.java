import java.io.*;

public class Trip {
    public static void main (String args[]) throws IOException {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int count = 0;
        System.out.println("Please provide input");
        count = Integer.parseInt(in.readLine());
        float students[] = new int[count];
        float total = 0;
        for (int i = 0; i < count; i++) {
            students[i] = Float.parseFloat(in.readLine());
            total += students[i];
        }
        float average = ((int)(total / count) * 100) / 100.0f;
        float pay = 0.0, bor = 0.0;
        for (int i = 0; i < count; i++) {
            if (average < students[i]) {
                pay += students[i] - average;
            } else {
                bor += average - students[i];
            }
        }
        System.out.println("$" + Math.min(pay, bor));
    }
}