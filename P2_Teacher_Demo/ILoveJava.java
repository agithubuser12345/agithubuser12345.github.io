package ilovejava;

import java.util.Scanner;

public class ILoveJava {

    public static void main(String[] args) {
        System.out.println("Hello World");

        Scanner input = new Scanner(System.in);
        System.out.println("What is your name");
        String name = input.nextLine();

        System.out.println("Hello " + name + ".");

        System.out.println("How old are you?");

        int age = input.nextInt();

        System.out.println("I see you are " + age + " years old.");

    }
}