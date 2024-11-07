import sys
from tkinter import *
from tkinter import StringVar, messagebox
from PIL import *

class ATM:
    pin = 4040
    balance = 500000

    @staticmethod
    def main():
        print("Welcome to ATM")
        if ATM.is_correct():
            ATM.show_menu()
        else:
            print("Invalid PIN")

    @staticmethod
    def is_correct():
        entered_pin = int(input("Enter the PIN: "))
        if entered_pin == ATM.pin:
            return True
        return False

    @staticmethod
    def show_menu():
        while True:
            print("----------------------------------")
            print("1. Check balance")
            print("2. Withdraw money")
            print("3. Deposit amount")
            print("4. Change PIN")
            print("5. Exit")
            print("----------------------------------")

            try:
                choice = int(input("Enter your choice: "))
                if choice < 1 or choice > 5:
                    print("Invalid choice")
                    continue
            except ValueError:
                print("Please enter a valid integer choice.")
                continue

            if choice == 1:
                ATM.check_balance()
            elif choice == 2:
                ATM.withdraw()
            elif choice == 3:
                ATM.deposit()
            elif choice == 4:
                ATM.change_pin()
            elif choice == 5:
                print("Thank you for visiting!")
                sys.exit()

    @staticmethod
    def check_balance():
        print(f"Current balance in your account: {ATM.balance}")

    @staticmethod
    def withdraw():
        try:
            withdraw_amt = int(input("Enter withdrawal amount: "))
            if withdraw_amt <= 0 or withdraw_amt % 100 != 0:
                print("Please enter a valid amount (multiple of 100).")
                return
            if withdraw_amt > ATM.balance:
                print("Insufficient balance.")
            else:
                ATM.balance -= withdraw_amt
                print(f"Withdrawal successful. Current balance: {ATM.balance}")
        except ValueError:
            print("Please enter a valid amount.")

    @staticmethod
    def deposit():
        try:
            deposit_amt = int(input("Enter your deposit amount: "))
            if deposit_amt <= 0:
                print("Please enter a valid deposit amount.")
            else:
                ATM.balance += deposit_amt
                print(f"Deposit successful. Current balance: {ATM.balance}")
        except ValueError:
            print("Please enter a valid amount.")

    @staticmethod
    def change_pin():
        try:
            current_pin = int(input("Enter your current PIN: "))
            if current_pin != ATM.pin:
                print("Invalid PIN")
                return
            new_pin = int(input("Enter new PIN (4 digits): "))
            if new_pin < 1000 or new_pin > 9999:
                print("PIN must be 4 digits.")
            else:
                ATM.pin = new_pin
                print("PIN successfully changed.")
        except ValueError:
            print("Please enter a valid 4-digit PIN.")

if __name__ == "__main__":
    ATM.main()
def mainwindow():
    mainwindow = Tk()
    

    
    mainwindow.geometry("1040x1040")
    bg_image = PhotoImage(file="images.png")
    
    # Create a label to display the background image
    bg_label = Label(mainwindow, image=bg_image)
    bg_label.place(x=0, y=0, relwidth=1, relheight=1)
    mainwindow.config(background="")
    Label(mainwindow, text="ATM MACHINE", font=("monoco", 20) , fg='blue').place(x=110, y=200)
    mainwindow.mainloop()
    
mainwindow()