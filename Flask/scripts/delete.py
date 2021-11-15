# importing os module
import os

# main function
def deletepic():
    
    # specify the path
    path = "../static"
    
    # specify the extension
    extension = ".png"
    
    # checking whether the path exist or not
    if os.path.exists(path):       
        # check whether the path is directory or not
        if os.path.isdir(path):        
            # iterating through the subfolders
            for root_folder, folders, files in os.walk(path):
                
                # checking of the files
                for file in files:

                    # file path
                    file_path = os.path.join(root_folder, file)

                    # extracting the extension from the filename
                    file_extension = os.path.splitext(file_path)[1]

                    # checking the file_extension
                    if extension == file_extension:                        
                        # deleting the file
                        if not os.remove(file_path):
                            # success message
                            print(f"{file_path} deleted successfully")
                            
                        else:
                            # failure message
                            print(f"Unable to delete the {file_path}")
        else:
            
            # path is not a directory
            print(f"{path} is not a directory")
    
    else:
        
        # path doen't exist
        print(f"{path} doesn't exist")