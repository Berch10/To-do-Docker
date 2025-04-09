declare var bootstrap: any; // Bootstrap is imported globally, so we just declare that it exists.

export class MessageManager {
  public constructor(private messagesContainer: HTMLElement) {}

  public showMessage(message: string): void {
    const alertEl: HTMLElement = this.createAlertElement(message);
    const alert: bootstrap.Alert = new bootstrap.Alert(alertEl);

    this.messagesContainer.appendChild(alertEl);

    // Auto-remove message after 5 seconds (5000ms)
    setTimeout(() => {
      alert.close();
    }, 5000);
  }

  public showError(error: any): void {
    const message =  (error instanceof Error) ? error.message : String(error).toString();
    this.showMessage(message);
  }

  private createAlertElement(message: string): HTMLElement {
    let alertEl: HTMLElement = document.createElement('div');
    alertEl.classList.add(
      'alert',
      'alert-info',
      'alert-dismissible',
      'fade',
      'show',
    );
    alertEl.setAttribute('role', 'alert');
    alertEl.textContent = message;

    let messageCloseButton: HTMLElement = document.createElement('button');
    messageCloseButton.className = 'btn-close';
    messageCloseButton.setAttribute('data-bs-dismiss', 'alert');

    // Add the close button to the alert.
    alertEl.appendChild(messageCloseButton);

    return alertEl;
  }
}
