import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Loop1 {
    public static void main(String []agrs) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(bufferedReader.readLine().trim());
        int n = 23;
        for (int i = 0; i <= 10; i++) {
            System.err.printf("%d * %d = %d%n", N, i, (N * i));
        }
        System.err.println("=================");
        bufferedReader.close();
    }
}
