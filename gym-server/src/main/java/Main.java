import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

import static java.time.temporal.ChronoUnit.DAYS;

public class Main {
    public static void main(String[] args){
//        String pattern = "dd-MM-yyyy, hh:mm a";
//       // DateTimeFormatter formatter = DateTimeFormatter.ofPattern("KK:mm:ss a", Locale.ENGLISH);
//        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(pattern);
//
//        String now = LocalDateTime.now().format(formatter) + LocalDateTime.now().getDayOfWeek();
//        System.out.println(now);

        LocalDateTime d1 = LocalDateTime.now();
        LocalDateTime d2 =LocalDateTime.of(2022, 1, 14, 10, 34);
        long daysBetween = DAYS.between(d2, d1);
        int weeks =(int) Math.ceil(Math.abs(DAYS.between(d2, d1))/7.0);
        System.out.println(daysBetween);
        System.out.println(weeks);
    }
}
