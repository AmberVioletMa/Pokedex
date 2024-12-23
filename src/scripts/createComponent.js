import fs from 'fs';
import path from 'path';

const createField = (name) => {
    // Replace spaces with underscores and convert to lowercase
    const folderName = name.replace(/\s+/g, "");
    const folderNameCamelCase = folderName.charAt(0).toLowerCase() + folderName.slice(1);
    const folderNamePascalCase = folderName.charAt(0).toUpperCase() + folderName.slice(1);
    let pathRoute = "./src/components/";

    // Create the folder
    fs.mkdirSync(path.join(pathRoute, folderNameCamelCase));

    // Create the file with content
    const CreateFile = (name, folderName, fileContent, fileName) => {
        fs.writeFileSync(path.join(pathRoute, folderName, fileName), fileContent);
        console.log(`Field "${name}" created successfully at ${fileName}`);
    };

    // Components //

    let fileContent = `
import { ${folderNameCamelCase}Interface } from "./${folderNameCamelCase}.model";

export const ${folderNamePascalCase} = ({}: ${folderNameCamelCase}Interface) => {
    return (
        <>${folderNameCamelCase} Component</>
    );
};
`;
    CreateFile(name, folderNameCamelCase, fileContent, `${folderNameCamelCase}.tsx`);

    // Interface //

    fileContent = `
   export interface ${folderNameCamelCase}Interface {}
    
   `;
    CreateFile(name, folderNameCamelCase, fileContent, `${folderNameCamelCase}.model.ts`);

    // Test //

    fileContent = `import { ${folderNameCamelCase} } from "./${folderNameCamelCase}";`;
    CreateFile(name, folderNameCamelCase, fileContent, `${folderNameCamelCase}.test.tsx`);


    // Styled //

    fileContent = `import styled from "styled-components";

export const Container = styled.div\`

\`;`;
    CreateFile(name, folderNameCamelCase, fileContent, `${folderNameCamelCase}.styled.ts`);

    // interface Index //

    let indexPath = path.join(pathRoute, "/interfaces/index.ts");
    let existingIndexContent = fs.existsSync(indexPath)
        ? fs.readFileSync(indexPath, "utf-8")
        : "";

    fileContent = `\nexport * from "../${folderNameCamelCase}/${folderNameCamelCase}.model";`;

    fs.writeFileSync(indexPath, existingIndexContent + fileContent);
    console.log(`Field "${name}" added to index.ts successfully`);

    // Index //

    fileContent = `
    export * from "./${folderNameCamelCase}";
`;
    CreateFile(name, folderNameCamelCase, fileContent, `index.ts`);
    indexPath = path.join(pathRoute, "index.ts");
    existingIndexContent = fs.existsSync(indexPath)
        ? fs.readFileSync(indexPath, "utf-8")
        : "";

    fileContent = `\nexport * from "./${folderNameCamelCase}";`;

    fs.writeFileSync(indexPath, existingIndexContent + fileContent);
    console.log(`Field "${name}" added to index.ts successfully`);

};

// Get the name from the command line arguments
const name = process.argv[2];
if (!name) {
    console.error("Please provide a name for the Component.");
} else {
    createField(name);
}

// run as: npm run createComponent -- "Component Name"