import { Component } from '@angular/core';

interface Speaker {
  name?: string;
  email?: string;
  function?: string;
  department?: string;
  status?: string;
  employed?: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  speakers: Speaker[] = [
    {
      name: 'Aziz Charada',
      email: 'aziz@gmail.com',
      function: 'Manager',
      department: 'Organization',
      status: 'Online',
      employed: '23/04/18',
      imageUrl: '../assets/img/speakers/1.png'
    },
    // Add other speakers as needed...
  ];

  isEditModalOpen = false;
  editableSpeaker: Speaker | null = null;

  openEditModal(speaker: Speaker) {
    // Ensure editableSpeaker is initialized with a copy of the selected speaker
    this.editableSpeaker = { ...speaker };
    
    // Fallback initialization if editableSpeaker somehow ends up null or undefined
    if (!this.editableSpeaker) {
      this.editableSpeaker = {
        name: '',
        email: '',
        function: '',
        department: '',
        status: '',
        employed: '',
        imageUrl: ''
      };
    }
  
    // Open the modal
    this.isEditModalOpen = true;
  }
  
    

  closeEditModal() {
    this.isEditModalOpen = false;
    this.editableSpeaker = null; // Reset the editable speaker when closing the modal
  }

  saveChanges() {
    // Only proceed if editableSpeaker is not null
    if (this.editableSpeaker) {
      // Find the index of the speaker to edit
      const index = this.speakers.findIndex(speaker => speaker.email === this.editableSpeaker?.email);
      
      // Check if index is valid
      if (index !== -1) {
        this.speakers[index] = { ...this.editableSpeaker }; // Update the speaker in the list
      }

      // Close the modal
      this.closeEditModal();
    }
  }
  
}
