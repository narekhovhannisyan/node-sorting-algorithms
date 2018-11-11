# Contributing to sorting-algorithms

## Code Contributions

#### Step 1: Clone

Clone the project on [GitHub](https://github.com/narekhovhannisyan/sorting-algorithms.git)
   
   ``` bash
   $ git clone https://github.com/narekhovhannisyan/sorting-algorithms
   $ cd user-media-upload
   ```
   
For developing new features and bug fixes, the stage branch should be pulled and built upon.

#### Step 2: Branch

Create a new topic branch to contain your feature, change, or fix:

   ``` bash
   $ git checkout -b <topic-branch-name>
   ```

#### Step 3: Commit

Make sure git knows your name and email address:

   ``` bash
   $ git config --global user.name "Example User"
   $ git config --global user.email "user@example.com"
   ```
    
Add and commit:

   ``` bash
   $ git add my/changed/files
   $ git commit
   ```
    
Commit your changes in logical chunks. Please adhere to these [Commit message guidelines](#commit-message-guidelines)
   or your code is unlikely be merged into the main project.

#### Step 4: Rebase

Use git rebase to synchronize your work with the main repository.

   ``` bash
   $ git fetch upstream
   $ git rebase upstream/master
   ```
   
#### Step 5: Push

Push your topic branch:

   ``` bash
   $ git push origin <topic-branch-name>
   ```

#### Step 6: Pull Request

Open a Pull Request with a clear title and description.


## Commit message guidelines


The commit message should describe what changed and why.

   1. The first line should:
       * contain a short description of the change
       * be 60 characters or less
       * be prefixed with the name of the changed subsystem
       * be entirely in lowercase with the exception of proper nouns, acronyms, and the words that refer to code,
         like function/variable names
        
       Examples:
       
       ```
       sort(selection.sort): fix JSDoc param for selectionSort function
       root(package.json): init package.json file, npm module
       src(index): export insertionSort via index.js
       ```
   2. Keep the second line blank. 
          
   3. Wrap all other lines at 72 columns:
      * describe each line in logical chunks
      * start each line with: space hyphen space ( - ...)
      * be entirely in lowercase with the exception of proper nouns, acronyms, and the words that refer to code,
        like function/variable names
      
      Examples:
      
      ```    
        - add method _awsMimeType to check media type
        - refactor function from Auth class
        - fixes #24
      ```
