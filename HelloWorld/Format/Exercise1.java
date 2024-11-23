package HelloWorld.Format;

import java.util.*;

public class Exercise1 {
    public static void main(String[] args) {
        System.out.println("==============================");
        Scanner sc = new Scanner(System.in);
        int age = sc.nextInt();
        sc.nextLine();
        String name = sc.nextLine();
        double result = sc.nextDouble();

        System.out.printf("Name: %s\n", name);
        System.out.printf("Age: %d\n", age);
        System.out.printf("Result: %.2f\n", result);
        System.out.println("==============================");

    }
}
