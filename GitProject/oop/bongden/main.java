public class main {
    public static void main(String[] args) {
        ElectricLamp e = new ElectricLamp();
        SwitchButton bt  =new SwitchButton();
        bt.connectToLamp(e);
        for (int i = 0; i < 10; i++) {
            e.turnOn();
        }
    }
}
