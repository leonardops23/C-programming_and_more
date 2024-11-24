package HelloWorld.Format;
import java.util.Scanner;

/**
 * Practice Exercise
 * Write a program a format the following data:
 * name = ""
 * age = 29
 * height = 1.23

 
    Name     Age   Height
    John Doe  29   1.76
 */


public class Exercise1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name = sc.nextLine();
        int age = sc.nextInt();
        float height = sc.nextFloat();
        System.out.printf("%-10s%-10s%-10s%n", "Name", "Age", "Height");
        System.out.printf("%-10s%-10d%.2f%n", name, age, height);
        sc.close();
    }
}
