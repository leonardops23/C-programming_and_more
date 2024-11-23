package HelloWorld.Format;
import java.text.DecimalFormat;

public class DecimalFormat1 {
    public static void main(String[] args) {
        double random = 233223.329495;
        DecimalFormat df = new DecimalFormat("#,###.00");
        System.out.println("Formatted Number: " + df.format(random));
    }
}
